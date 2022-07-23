import {
    convertMillimetersToTwip,
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
                        heading: HeadingLevel.HEADING_2,
                        children: [
                            new TextRun({
                                text: d.value,
                                bold: true,
                            }),
                        ],
                    })
                )
            }
            if (d.type == "sub-heading") {
                doc_sections.push(
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        children: [
                            new TextRun({
                                text: d.value,
                            }),
                        ],
                    })
                )
            }
            console.log(d.value)
            if (d.type == "paragraph") {
                doc_sections.push(
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: d.value,
                                size: 24,
                                font: "Times New Roman",
                            }),
                        ],
                    })
                )
            }
            if (d.type == "image") {
            }
        })
    })
    const doc = new Document({
        styles: {
            default: {
                heading1: {
                    run: {
                        bold: true,
                        color: "000000",
                        underline: UnderlineType.SINGLE,
                        size: 36,
                        font: "Times New Roman",
                    },
                },
                heading2: {
                    run: {
                        bold: true,
                        color: "000000",
                        size: 32,
                        font: "Times New Roman",
                    },
                },
                heading3: {
                    run: {
                        bold: true,
                        color: "000000",
                        size: 28,
                        font: "Times New Roman",
                    },
                },
            },
        },
        sections: [
            {
                properties: {
                    page: {
                        margin: {
                            top: convertMillimetersToTwip(30),
                            left: convertMillimetersToTwip(30),
                            right: convertMillimetersToTwip(20),
                            bottom: convertMillimetersToTwip(15),
                        },
                    },
                },
                children: [
                    new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [
                            new TextRun({
                                text: title,
                            }),
                        ],
                    }),
                    ...doc_sections,
                ],
            },
        ],
    })
    const blob = await Packer.toBlob(doc)
    return blob
}

export default toDocx
