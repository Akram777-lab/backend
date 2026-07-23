import type { StrapiApp } from '@strapi/strapi/admin';
import CityFilter from './components/CityFilter';
import CreatedAtDisplay from './components/CreatedAtDisplay';

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    const plugin = app.getPlugin('content-manager');
    if (plugin) {
      plugin.injectComponent('listView', 'actions', {
        name: 'CityFilter',
        Component: CityFilter,
      });

      plugin.injectComponent('editView', 'right-links', {
        name: 'CreatedAtDisplay',
        Component: CreatedAtDisplay,
      });
    }
  },
};
