[![npm version](https://img.shields.io/npm/v/@eamode/eang.svg)](https://www.npmjs.com/package/@eamode/eang) 
[![travis build](https://img.shields.io/travis/EAmode/eang.svg)](https://travis-ci.org/EAmode/eang)

# eang
Reactive components for Angular with customizable UX themes

## Why eang?
eang is fast, fully reactive, and really flexible angular development framework with a set of themeable visual components. Through its native support for reactive programming, eang enables your angular apps to automatically update the user experience in response to event stream data from event sources. Eang plays well with your existing Angular architecture.


## Getting Started Section
1. Create a new empty project use Angular CLI:

```ng new [project name]```

2. Add `eang` to your Angular project by running:

```npm install -S @eamode/eang``` 

3. Import selected `eang` modules in your project module file. e.g. `app.module.ts`:

```
import { PanelModule, AutoCompleteModule, ...} from '@eamode/eang'
@NgModule({
  ...
  imports: [..., PanelModule, AutoCompleteModule, ...],
  ...
})

```

4. To use eang themes add ```@import '~@eamode/eang/css/all.css' ```at your ```styles.css``` file.

5. If app will be generated with the help of Angular CLI root component will be named ```<app-root></app-root>```.In the file ```index.html``` add a class to your root component:
```
...
<body>
  <app-root class="mode"></app-root>
</body>
...
```

| Theme Name | Description |
|------------|-------------|
| mode       | default theme of [MODE](https://www.eamode.com) |
| material   | Components designed following Google's Material design |
| your-theme-here | It is easy to add your own completely customized theme as well.|

6. In the template of your root component add, for example: 
```
...
<ea-layout>
  <ea-toolbar>
    <!-- Toolbar Content here -->
  </ea-toolbar>

  <ea-drawer>
    <!-- Drawer Content here -->
  </ea-drawer>

  <ea-main>
    <ea-body>
      <!-- Body content here -->
    </ea-body>
  </ea-main>
</ea-layout>
...
```

7. If you do not like the theme color or another component attributes, just override them. Use ```.<class name>``` to change the value of the variable for all components in your ```style.css``` file:
  
```
.mode {
  --ea-color-background-2: "your value";
}
```
Use ```<tag name>``` to change the value of the variable for some component:

```
ea-drawer {
  --ea-drawer-width: "your value";
}
```

8. Launch your app by using the CLI command ```ng serve```.  Enjoy.

## Develop
```sh
git clone https://github.com/EAmode/eang.git
cd eang
npm install
npm start
```
Go to http://localhost:4204/ to bring up the website eang-io using `@eamode/eang` itself.

In order for eang-io to reflect changes made in `@eamode/eang`, eang-io needs to be linked to `@eamode/eang`.

```sh
npm run build
cd dist/eamode/eang
npm link
cd ../../../
npm link @eamode/eang
```

Start `npm run watch` and then `npm run start` in a different terminal. At that point everything should be hot-reloading during development.

You can do that with every angular project using `eang`. The project's `npm start` might break, when `npm run watch` is run in eang, because `watch` deletes files in the dist folder that the project is linked to. Just restart `watch` and then `npm start` in your project again.

NPM scripts:
- `npm start`: Starts eang-io in watch mode.
- `npm run watch`: Compiles `@eamode/eang` in watch mode.
- `npm run commit`: CLI tool `git-cz` to commit to git with `conventional` style.
- `npm run format`: Automatic code formatting the whole project.
- `npm run lint`: Linting Angular and CSS.

Recommended VS Code extensions:
- Angular Language Service
- agular2-inline
- Debugger for Chrome
- PostCSS syntax
- Prettier
- TSLint
- stylelint

### Create your own eang CSS theme
By default, eang components are styled using the theme called 'mode'. However, you can create your own custom theme by following the steps below.
1. Create a file: `themes/<nameofyourtheme>.css`
2. Create a directory: `themes/<nameofyourtheme>`
3. Inside the `themes/<nameofyourtheme>` directory...
  * create a file called `variables.css` (you can copy a variables.css file from one of the other existing theme directories)
  * create a file `<nameofeangcomponen>.css`
4. to modify fonts and colors, you can play with the values inside the file `themes/<nameofyourtheme>/variables.css`
5. set up a post-css pipeline
  * add a line into the file `'`package.json`'` inside of the `'` "scripts": {`'` section as follows: `"css:<nameofyourtheme>": "postcss themes/all.css themes/<nameofyourtheme>.css themes/<nameofyourtheme>.css themes/<nameofyourtheme>/**/*.css -o playground/dist/<nameofyourtheme>.css",`


### travis (build, publish to npm, reference docs)
eang's build scripts enforce linting to prevent errors.
to commit your changes to eang, just  run `npm run commit` and follow the prompts
