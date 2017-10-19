# vue-books

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

```
 data () {
      return {
        announcement: '今日图书特价',
        slides: [
          {id: 1, img_url: '/static/sliders/t1.svg'},
          {id: 2, img_url: '/static/sliders/t2.svg'}
        ],
        latestUpdated: [
          {
            id: 1,
            title: '家',
            authors: ['Amili', 'Daniel'],
            img_url: '/static/covers/1.svg'

          },
          {
            id: 2,
            title: '春',
            authors: ['Amili'],
            img_url: '/static/covers/2.svg'

          },
          {
            id: 3,
            title: '秋',
            authors: ['Daniel'],
            img_url: '/static/covers/3.svg'

          },
          {
            id: 4,
            title: '家',
            authors: ['Amili', 'Daniel'],
            img_url: '/static/covers/4.svg'

          },
          {
            id: 5,
            title: '家',
            authors: ['Amili', 'Daniel'],
            img_url: '/static/covers/5.svg'

          }
        ],
        recommended: [
          {
            id: 1,
            title: '家',
            authors: ['Amili', 'Daniel'],
            img_url: '/static/covers/1.svg'

          },
          {
            id: 2,
            title: '春',
            authors: ['Amili'],
            img_url: '/static/covers/2.svg'

          },
          {
            id: 3,
            title: '秋',
            authors: ['Daniel'],
            img_url: '/static/covers/3.svg'

          },
          {
            id: 4,
            title: '家',
            authors: ['Amili', 'Daniel'],
            img_url: '/static/covers/4.svg'

          },
          {
            id: 5,
            title: '家',
            authors: ['Amili', 'Daniel'],
            img_url: '/static/covers/5.svg'

          }
        ]
      }
    }
