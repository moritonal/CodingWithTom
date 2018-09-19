import marked from "marked"
import { first, rest, chain } from "underscore"
import matchAll from "match-all"

class GroupedMarkdownLex {
    start : marked.TokensList;
    data : marked.TokensList;

    get children() : GroupedMarkdownLex[] {
        
        return MarkdownLexor.SplitByHeading(4, this.data);
    }

    constructor(data : marked.TokensList, start? : marked.TokensList) {
        this.start = start;
        if (this.start)
            this.start.links = {};
        this.data = data;
        if (this.data)
            this.data.links = {};
    }
}

export default class MarkdownLexor {

    static SplitByHeading(depth : number, array : marked.TokensList) : Array<GroupedMarkdownLex> {

        let start : number = null;

        let groups : GroupedMarkdownLex[] = [];

        for (let i=0;i<array.length;i++) {

            let curr = array[i];

            if (curr.type == "heading" && curr.depth != null) {

                if (start == null) {

                    if (i > 0) {
                        groups.push(new GroupedMarkdownLex(chain(array).first(i).value()));
                    }

                    start = i;
                } else if (curr.depth == depth) {

                    groups.push(new GroupedMarkdownLex(
                        chain(array).rest(start + 1).first(i-(start + 1)).value(),
                        chain(array).rest(start).first(1).value()
                    ));

                    start = i;
                }
            }
        }

        if (start != null) {
            groups.push(new GroupedMarkdownLex(
                chain(array).rest(start + 1).first(array.length-(start + 1)).value(),
                chain(array).rest(start).first(1).value()
            ));
        }

        return groups;
    }

    static escapeHtml(html : string) {
        var text = document.createTextNode(html);
        var p = document.createElement('p');
        
        p.appendChild(text);

        return p.innerHTML;
    }

    static GroupsToObj(obj : GroupedMarkdownLex) {

        let renderer = new marked.Renderer();

        renderer.code = (text : string, language : string) => {

            // Diff
            if (/`{3}vs/.test(text)) {

                let left = matchAll(text, /([\s|\S]*)\n```vs/gi).toArray()[0];
                let right = matchAll(text, /```vs\n([\s|\S]*)/gi).toArray()[0];

                var escapedTextLeft = this.escapeHtml(left);
                var escapedTextRight = this.escapeHtml(right);

                return `<MonicoCode language='${language}' mode="diff"><div id="left">${escapedTextLeft}</div><div id="right">${escapedTextRight}</div></MonicoCode>`;
            } else {
                let escapedText = this.escapeHtml(text);

                return `<MonicoCode language='${language}'>${escapedText}</MonicoCode>`;
            }
        };

        let summary = obj.start != null ? marked.parser(obj.start, {
            renderer: renderer
        }) : null;

        let objectives = obj.children.length > 0 ? obj.children.map(i=>this.GroupsToObj(i)) : null;

        let text = obj.children.length == 0 ? marked.parser(obj.data, {
            renderer: renderer
        }) : null;

        return {
            summary: summary,
            objectives: objectives,
            text: text
        }
    }

    static Parse(text : string) {

        // Here I think it'd be best to convert the markdown into json, then work with it.
        // Although there a small argument that markdown isn't the correct format in the first place.

        let lexer = new marked.Lexer();

        let lex : marked.TokensList = lexer.lex(text);

        let groups = this.SplitByHeading(1, lex);

        let obj = this.GroupsToObj({
            children: groups.filter(i=>i.start != null),
            start: (groups.filter(i=>i.start == null)[0]).data,
            data: []
        });

        return obj;
    }
}