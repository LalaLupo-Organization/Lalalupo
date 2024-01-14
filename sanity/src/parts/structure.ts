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
        .title("Course Structure")
        .child(
          S.documentTypeList("courseStructure")
            .title("Course Structure")
            .apiVersion("v2023-12-15")
            .filter('_type == "courseStructure"'),
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
                .title("English")
                .icon(Icons.Page)
                .child(
                  S.list()
                    .title("Language Choice")
                    .items([
                      // Panel for Home category
                      S.listItem()
                        .title("Italian")
                        .child(
                          S.list()
                            .title("English to Italian")
                            .items([
                              S.listItem()
                                .title("Course Structure")
                                .child(
                                  S.documentTypeList("courseStructure")
                                    .title("Course Structure")
                                    .apiVersion("v2023-12-15")
                                    .filter('_type == "courseStructure"'),
                                ),
                            ]),
                        ),

                      S.listItem()
                        .title("Chinese")
                        .child(S.list().title("English to Chinese").items([])),
                      S.listItem()
                        .title("English to More langugaes")
                        .child(
                          S.list().title("English to More languages").items([]),
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
