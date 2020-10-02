# Adding a new event

When you are adding a new event, here's the procedure: 

1. Create a folder with the name of the event (see other events as example) under the correct language folder
2. Create a markdown file index.md under the folder
3. Add following remark to the start of the file, and fill it (again, check examples from other events):

```markdown
---

title: 
date: 
speakers:
  - 
host: 
type: "event"
lang: en

---
```

Some notes:

- **title** is a string
- **date** in "YYYY-MM-DD"-format
- **speakers** as a list
- **host** is a string
- **lang** is either en, fi or sv

At least title, date, type and lang are required.

Note, that first and foremost the event should be created in English. If you want, you can add Finnish and Swedish as well, but if you don't, please add an issue that these translations are missing. 