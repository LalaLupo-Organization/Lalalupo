import { StructureBuilder } from "sanity/desk";
import {
  BiFileBlank,
  BiFile,
  BiFolder,
  BiLayout,
  BiCog,
  BiWrench,
  BiMapPin,
  BiMenu,
  BiUser,
  BiArchive,
  BiCart,
  BiCollection,
  BiCalendar,
  BiCamera,
  BiPalette,
  BiBulb,
  BiMicrophone,
  BiPlayCircle,
  BiNetworkChart,
  BiSend,
  BiMap,
  BiDollarCircle,
  BiBook,
} from "react-icons/bi";

const Icons = {
  Page: BiFileBlank,
  File: BiFileBlank,
  Folder: BiFolder,
  Author: BiUser,
  Article: BiFile,
  Event: BiCalendar,
  Map: BiMap,
  Swatch: BiPalette,
  Product: BiCart,
  Collection: BiCollection,
  Instagram: BiCamera,
  Form: BiArchive,
  Menu: BiMenu,
  Template: BiLayout,
  Setting: BiCog,
  Advanced: BiWrench,
  Hint: BiBulb,
  Microphone: BiMicrophone,
  PlayCircle: BiPlayCircle,
  Affiliate: BiNetworkChart,
  Send: BiSend,
  Dollar: BiDollarCircle,
  Book: BiBook,
};
const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .showIcons(true)
    .items([
      S.listItem()
        .title("Pages")
        .icon(Icons.Page)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Home")
                .icon(Icons.Page)
                .child(S.documentTypeList("homepage").title("Home Page")),
              S.listItem().title("Articles").icon(Icons.Page),
              S.listItem().title("Cart").icon(Icons.Page),
              S.listItem()
                .title("About")
                .icon(Icons.Page)
                .child(S.documentTypeList("aboutpage").title("About Page")),
              S.listItem().title("FAQ").icon(Icons.Page),
              S.listItem().title("Contact").icon(Icons.Page),
              S.divider(),
              S.listItem().title("Account").icon(Icons.Page),
              S.listItem().title("Settings").icon(Icons.Page),
            ]),
        ),

      S.listItem()
        .title("Articles")
        .icon(Icons.Article)
        .child(S.list().title("Articles").items([])),
      S.listItem()
        .title("Videos")
        .icon(Icons.PlayCircle)
        .child(S.list().title("Videos").items([])),
      S.divider(),
      S.listItem()
        .title("Products")
        .icon(Icons.Product)
        .child(
          S.list()
            .title("Site Language")
            .items([
              S.listItem()
                .title("English to Italian")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()
                        .title("Italian Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-it"',
                            ),
                        ),
                      S.divider(),
                    ]),
                ),
              S.listItem()
                .title("English to Chinese")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Chinese Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-ch"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to Spanish")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Spanish Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-es"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to French")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("French Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-fr"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to Japanese")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Japanese Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-ja"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to Korean")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Korean Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-ko"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to German")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("German Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-de"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to Hindi")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Hindi Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-in"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to Russian")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Russian Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-ru"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to Arabic")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Arabic Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-ar-sa"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to English")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("English Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-en"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to Portuguese")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()
                        .title("Portuguese Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-pt"',
                            ),
                        ),
                    ]),
                ),

              S.listItem()
                .title("English to Turkish")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Turkish Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-tr"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to Dutch")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()
                        .title("Dutch Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-nl"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to Vietnamese")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Vietnamese Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-vi"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to Greek")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Greek Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-el"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to Polish")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Polish Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-pl"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to Swedish")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Swedish Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-sv"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to Latin")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Latin Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-la"',
                            ),
                        ),
                    ]),
                ),
              S.listItem()
                .title("English to Irish")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Irish Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "en-ga"',
                            ),
                        ),
                    ]),
                ),
              S.divider(),

              S.listItem()
                .title("Chinese to Turkish")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()

                        .title("Turkish Course")
                        .icon(Icons.Book)
                        .child(
                          S.documentTypeList("courseStructure")
                            .title("Course Structure")
                            .apiVersion("v2023-12-15")
                            .filter(
                              '_type == "courseStructure" && languageCode == "ch-en"',
                            ),
                        ),
                      S.divider(),
                    ]),
                ),
            ]),
        ),

      S.listItem()
        .title("Users")
        .icon(Icons.Author)
        .child(S.list().title("Articles").items([])),
      S.divider(),

      S.listItem()
        .title("Navigation")
        .icon(Icons.Menu)
        .child(S.list().title("Articles").items([])),
      S.listItem()
        .title("Settings")
        .icon(Icons.Setting)
        .child(S.list().title("Articles").items([])),
      S.divider(),
      S.listItem()
        .title("Site Languages")
        .icon(Icons.Map)
        .child(S.documentTypeList("siteLanguages").title("Site Languages")),
      S.divider(),
    ]);

export default structure;
