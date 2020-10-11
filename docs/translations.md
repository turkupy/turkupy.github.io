# Translations

There are two parts to the translations; *translations for texts in pages* and *translations for the events*. 

## Translations for page texts

These translations can be found from [translations.json](../src/utils/translations/translations.json). To use them, there is a helper function in [helpers.js](../src/utils/translations/helpers.js) which can be used this way:

```js
getTranslations(langCode, key)
``` 

where `langCode` is one of the following: "en", "fi", "sv" and key is one of the keys in `translations.json`.

## Translations for the events

Events can be found under [content/events](../content/events), and are divided by language. This way, when gatsby creates pages, they have the correct path.

## Adding new translations

There are two cases, when adding new translations - adding new texts to the website, or adding a completely new language. (Adding translations to events happens the same way as creating a new event. See more in [events-doc](./adding-new-events.md))

A note about order of languages - English is the primary language for us, so that should be always created first. Then, if you want, you can add Finnish and Swedish translations, but if you don't, please create an issue so that they will be added at some point.

### New texts

When adding new texts, add a new entry to [translations.json](../src/utils/translations/translations.json) with the following structure:

```json
"keyname": {
  "en": "English text",
  "fi": "Finnish text",
  "sv": "Swedish text"
}
```

where `keyname` is logical, for example text for the frontpage would start with `frontpage.`. (see other keys in the file). You have to provide at least the english version, but others are recommended as well. If you don't know the translation, add at least the english version to every key.

### New language

When you add a new language, there are several things to do:

- Add the key of the language to the [translations.json](../src/utils/translations/translations.json) and to every translation key there is.
- Add a folder to [content/events](../content/events) with the name of the language code, and copy events from the `en`-folder there. Change the `lang`-attribute in frontmatter to the language code. Translate the events to the language you are adding (this is optional, but recommended)
- Add a folder to [src/pages](../src/pages) with the name of the language code. Copy the `index.jsx`-file under it, and change lang-codes inside the component **and** in the query.
- Update the docs (this one) accordingly adding the language code to examples.

## TODO:

- [ ] Add Swedish translations to `translations.json`
- [ ] Add Finnish translations to `translations.json`