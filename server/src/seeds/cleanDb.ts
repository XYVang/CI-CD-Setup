import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName]; // Store the model reference

    // Check if the model or model.db is undefined to avoid accessing properties on undefined
    if (!model || !model.db || !model.db.db) {
      throw new Error(`Model "${modelName}" or its database connection not found`);
    }

    let modelExists = await model.db.db.listCollections({
      name: collectionName
    }).toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
