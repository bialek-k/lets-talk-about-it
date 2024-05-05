export const joinUsQuery = `
  query JoinUs($locale: SiteLocale) {
    allJoins(locale: $locale) {
      social {
        id
        name
        description {
          value
        }
        icon {
          responsiveImage(
            imgixParams: { fit: crop, w: 300, h: 300, auto: format, q: 75 }
          ) {
            alt
            base64
            bgColor
            title
            aspectRatio
            height
            sizes
            src
            srcSet
            webpSrcSet
            width
          }
        }
      }
    }
  }
`;
