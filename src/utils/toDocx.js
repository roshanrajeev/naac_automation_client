import {
    Document,
    HeadingLevel,
    Packer,
    Paragraph,
    SectionType,
    TextRun,
    UnderlineType,
} from "docx"

const toDocx = async (title, sections) => {
    const doc_sections = []
    sections.forEach((section) => {
        section.data.forEach((d) => {
            if (d.type == "heading") {
                doc_sections.push(
                    new Paragraph({
                        text: d.value,
                        heading: HeadingLevel.HEADING_2,
                    })
                )
            }
            if (d.type == "sub-heading") {
                doc_sections.push(
                    new Paragraph({
                        text: d.value,
                        heading: HeadingLevel.HEADING_3,
                    })
                )
            }
            if (d.type == "paragraph") {
                doc_sections.push(
                    new Paragraph({
                        text: d.value,
                    })
                )
            }
            if (d.type == "image") {
            }
        })
    })
    const doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [
                            new TextRun({
                                text: title,
                                underline: { type: UnderlineType.SINGLE },
                                bold: true,
                            })
                        ]
                    }),
                    ...doc_sections
                ],
            },
        ],
    })
    const blob = await Packer.toBlob(doc)
    return blob
}

export default toDocx
