import type { Schema, Struct } from '@strapi/strapi';

export interface CourseCertification extends Struct.ComponentSchema {
  collectionName: 'components_course_certifications';
  info: {
    displayName: 'certification';
    icon: 'archive';
  };
  attributes: {
    description: Schema.Attribute.Text;
    faqs: Schema.Attribute.Component<'shared.question-answer', true>;
    title: Schema.Attribute.String;
  };
}

export interface CourseCoursePlacement extends Struct.ComponentSchema {
  collectionName: 'components_course_course_placements';
  info: {
    displayName: 'course-placement';
    icon: 'briefcase';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true>;
    name: Schema.Attribute.String;
  };
}

export interface CourseCourseStats extends Struct.ComponentSchema {
  collectionName: 'components_course_course_stats';
  info: {
    description: '';
    displayName: 'course-stats';
  };
  attributes: {
    content: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface CourseFeatures extends Struct.ComponentSchema {
  collectionName: 'components_course_features';
  info: {
    displayName: 'features';
    icon: 'connector';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.steps', true>;
    title: Schema.Attribute.String;
  };
}

export interface CourseMainContent extends Struct.ComponentSchema {
  collectionName: 'components_course_main_contents';
  info: {
    description: '';
    displayName: 'Main Content';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    discount_fees: Schema.Attribute.BigInteger;
    fees: Schema.Attribute.BigInteger;
    image: Schema.Attribute.Media<'images'>;
    ratings: Schema.Attribute.BigInteger;
    star: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    stats: Schema.Attribute.Component<'course.course-stats', true>;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneBrands extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_brands';
  info: {
    description: '';
    displayName: 'Brands';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneRelatedCourses extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_related_courses';
  info: {
    displayName: 'related-courses';
    icon: 'book';
  };
  attributes: {
    courses: Schema.Attribute.Relation<'oneToMany', 'api::course.course'>;
  };
}

export interface HomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_home_abouts';
  info: {
    displayName: 'about';
    icon: 'stack';
  };
  attributes: {
    description: Schema.Attribute.Text;
    faq: Schema.Attribute.Component<'shared.question-answer', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeContact extends Struct.ComponentSchema {
  collectionName: 'components_home_contacts';
  info: {
    description: '';
    displayName: 'contact';
    icon: 'phone';
  };
  attributes: {
    address: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeCoursesSection extends Struct.ComponentSchema {
  collectionName: 'components_home_courses_sections';
  info: {
    description: '';
    displayName: 'courses-section';
    icon: 'book';
  };
  attributes: {
    courses: Schema.Attribute.Component<'dynamic-zone.related-courses', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Component<'shared.highlight-text', false>;
    title: Schema.Attribute.Component<'shared.highlight-text', false>;
  };
}

export interface HomeWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_home_why_choose_uses';
  info: {
    displayName: 'why_choose_us';
    icon: 'car';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'course.course-stats', true>;
    title: Schema.Attribute.String;
  };
}

export interface ItemsCourseItem extends Struct.ComponentSchema {
  collectionName: 'components_items_course_items';
  info: {
    displayName: 'course-item';
  };
  attributes: {
    courses: Schema.Attribute.Component<'shared.link', true>;
    text: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    description: '';
    displayName: 'footer';
    icon: 'seed';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.Component<'shared.icon-link', false>;
    misc: Schema.Attribute.Component<'shared.icon-link', true>;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.Component<'shared.icon-link', false>;
    socials: Schema.Attribute.Component<'shared.icon-link', true>;
  };
}

export interface SharedHighlightText extends Struct.ComponentSchema {
  collectionName: 'components_shared_highlight_texts';
  info: {
    displayName: 'highlight-text';
  };
  attributes: {
    content: Schema.Attribute.Text;
    highlight: Schema.Attribute.Text;
  };
}

export interface SharedIconLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_links';
  info: {
    displayName: 'icon_link';
    icon: 'bell';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    sublinks: Schema.Attribute.Component<'shared.sub-link', true>;
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface SharedQuestionAnswer extends Struct.ComponentSchema {
  collectionName: 'components_shared_question_answers';
  info: {
    displayName: 'question-answer';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedSteps extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    description: '';
    displayName: 'Steps';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedSubLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_sub_links';
  info: {
    description: '';
    displayName: 'sub-link';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonials';
    icon: 'message';
  };
  attributes: {
    description: Schema.Attribute.String;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedUser extends Struct.ComponentSchema {
  collectionName: 'components_shared_users';
  info: {
    description: '';
    displayName: 'User';
    icon: 'user';
  };
  attributes: {
    firstname: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    job: Schema.Attribute.String;
    lastname: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'course.certification': CourseCertification;
      'course.course-placement': CourseCoursePlacement;
      'course.course-stats': CourseCourseStats;
      'course.features': CourseFeatures;
      'course.main-content': CourseMainContent;
      'dynamic-zone.brands': DynamicZoneBrands;
      'dynamic-zone.related-courses': DynamicZoneRelatedCourses;
      'home.about': HomeAbout;
      'home.contact': HomeContact;
      'home.courses-section': HomeCoursesSection;
      'home.hero': HomeHero;
      'home.why-choose-us': HomeWhyChooseUs;
      'items.course-item': ItemsCourseItem;
      'shared.footer': SharedFooter;
      'shared.highlight-text': SharedHighlightText;
      'shared.icon-link': SharedIconLink;
      'shared.link': SharedLink;
      'shared.question-answer': SharedQuestionAnswer;
      'shared.seo': SharedSeo;
      'shared.steps': SharedSteps;
      'shared.sub-link': SharedSubLink;
      'shared.testimonials': SharedTestimonials;
      'shared.user': SharedUser;
    }
  }
}
