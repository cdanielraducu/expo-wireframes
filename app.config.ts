import "dotenv/config";
import { ExpoConfig, ConfigContext } from "@expo/config";
import merge from "lodash.merge";

type ENV = "production" | "preview" | "development";

const configs: Record<ENV, Partial<ExpoConfig>> = {
  development: {
    name: "Wireframes Dev",
    ios: {
      bundleIdentifier: "com.cdanielraducu.wireframes-dev",
    },
    extra: {
      auth0ClientId: process.env.QA_AUTH0_CLIENT_ID,
      auth0ClientSecret: process.env.QA_AUTH0_CLIENT_SECRET,
    },
  },
  preview: {
    name: "Wireframes Preview",
    ios: {
      bundleIdentifier: "com.cdanielraducu.wireframes-preview",
    },
    extra: {
      auth0ClientId: process.env.QA_AUTH0_CLIENT_ID,
      auth0ClientSecret: process.env.QA_AUTH0_CLIENT_SECRET,
    },
  },
  production: {
    name: "Wireframes",
    ios: {
      bundleIdentifier: "com.cdanielraducu.wireframes",
    },
    extra: {
      auth0ClientId: process.env.PROD_AUTH0_CLIENT_ID,
      auth0ClientSecret: process.env.PROD_AUTH0_CLIENT_SECRET,
    },
  },
};

export default ({ config }: ConfigContext): ExpoConfig =>
  merge(
    {
      ...config,
      name: "Dani's Wireframes",
      slug: "Wireframes",
      extra: {
        eas: {
          projectId: "796f55b6-2164-483a-b099-69573f2b1279",
        },
        auth0ClientId: process.env.AUTH0_CLIENT_ID,
        auth0ClientSecret: process.env.AUTH0_CLIENT_SECRET,
      },
      plugins: [
        [
          "react-native-auth0",
          {
            domain: "test-auth0-mobile.eu.auth0.com",
          },
        ],
      ],
      ios: {
        bundleIdentifier: "com.cdanielraducu.wireframes",
      },
    },
    // configs[process.env.APP_ENV as ENV]
  );
