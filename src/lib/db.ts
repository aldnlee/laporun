import { openDB } from 'idb';

const DB_NAME = 'ngabuburun-db';
const STORE_NAME = 'pending_activities';

export const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    // Toko untuk menyimpan lari yang belum sempat ter-upload
    db.createObjectStore(STORE_NAME, { keyPath: 'tempId', autoIncrement: true });
  },
});

export async function saveRunLocally(runData: any) {
  const db = await dbPromise;
  return db.add(STORE_NAME, runData);
}

export async function getPendingRuns() {
  const db = await dbPromise;
  return db.getAll(STORE_NAME);
}

export async function deleteLocalRun(id: number) {
  const db = await dbPromise;
  return db.delete(STORE_NAME, id);
}