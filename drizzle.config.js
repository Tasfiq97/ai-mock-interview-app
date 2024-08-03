/** @type { import("drizzle-kit").Config } */
export default {
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://mockdb_owner:bDgCN6QJyfv4@ep-misty-limit-a1seaz5c.ap-southeast-1.aws.neon.tech/mockdb?sslmode=require',
  },
};
