export default ({ env }: { env: (key: string) => string }) => ({
    upload: {
      config: {
        provider: '@strapi/provider-upload-cloudinary',
        providerOptions: {
          cloud_name: env('CLOUD_NAME'),
          api_key: env('API_KEY'),
          api_secret: env('API_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          article: {
            field: 'slug',
            references: 'title',
          },
        },
      },
    },
  });
  