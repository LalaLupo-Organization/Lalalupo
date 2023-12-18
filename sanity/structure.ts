import { StructureBuilder } from "sanity/desk";
const structure = (S: StructureBuilder) =>
  S.list()
    .title("FROM")
    .showIcons(true)
    .items([
      S.listItem()
        .title("English")
        .child(
          S.list()
            .title("TO")
            .items([
              // Panel for Home category
              S.listItem()
                .title("Italian")
                .child(
                  S.list()
                    .title("English to Italian")
                    .items([S.listItem().title("Users")]),
                ),

              S.listItem()
                .title("Chinese")
                .child(
                  S.list()
                    .title("English to Chinese")
                    .items([S.listItem().title("Users")]),
                ),
              S.listItem()
                .title("English to More langugaes")
                .child(
                  S.list()
                    .title("English to More languages")
                    .items([S.listItem().title("Users")]),
                ),
              S.divider(),
              S.listItem()
                .title("Course Structure")

                .child(
                  S.documentTypeList("courseStructure")
                    .title("Course Structure")
                    .apiVersion("v2023-12-15")
                    .filter('_type == "courseStructure"'),
                  // Specify the API version
                ),

              //children for TO
              // .child(
              //   S.documentTypeList("chinese")
              //     .title("Home Page")
              //     .filter('_type == "chinese"')
              // ),
              //       // Panel for About category
              //       S.listItem()
              //         .title('About Page')
              //         .child(
              //           S.documentTypeList('about')
              //             .title('About Page')
              //             .filter('_type == "about"'),
              //         ),
              //       // Panel for Articles category
              //       S.listItem()
              //         .title('Article Page')
              //         .child(
              //           S.documentTypeList('articlePage')
              //             .title('Article Page')
              //             .filter('_type == "articlePage"'),
              //         ),
              //       // Panel for Projects category
              //       S.listItem()
              //         .title('Project Page')
              //         .child(
              //           S.documentTypeList('projectPage')
              //             .title('Project Page')
              //             .filter(' == "projectPage"'),
              //         ),
              //       // Panel for Speaking category
              //       S.listItem()
              //         .title('Speaking Page')
              //         .child(
              //           S.documentTypeList('speakingPage')
              //             .title('Speaking Page')
              //             .filter('_type == "speakingPage"'),
              //         ),
              //       // Panel for Uses category
              //       S.listItem()
              //         .title('Uses Page')
              //         .child(
              //           S.documentTypeList('usesPage')
              //             .title('Uses Page')
              //             .filter(' == "usesPage"'),

              //       // You can add more categories here as needed
            ]),
        ),
      S.listItem()
        .title("Chinese")
        .child(
          S.list()
            .title("TO")
            .items([
              // Panel for Home category
              S.listItem()
                .title("English")
                .child(
                  S.list()
                    .title("Chinese to English")
                    .items([S.listItem().title("Users")]),
                ),

              S.listItem()
                .title("Japanese")
                .child(
                  S.list()
                    .title("Chinese to Japansese")
                    .items([S.listItem().title("Users")]),
                ),
              S.listItem()
                .title("Chinese to More langugaes")
                .child(
                  S.list()
                    .title("Chinese to More languages")
                    .items([S.listItem().title("Users")]),
                ),
              S.divider(),
              S.listItem().title("Course Structure"),
            ]),
        ),

      S.divider(),
    ]);

export default structure;
