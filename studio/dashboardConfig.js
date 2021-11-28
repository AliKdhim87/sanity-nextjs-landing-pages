export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61a35baebd4389fa16c88db9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4ph5r8zi',
                  apiId: '3064cb26-b039-4160-a6f9-b20ece3b196b'
                },
                {
                  buildHookId: '61a35baee5f3f2efbf444398',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3xhz8h7c',
                  apiId: '147d6d0c-d4a6-4fe1-a24c-feccf8eafb6e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AliKdhim87/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3xhz8h7c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
