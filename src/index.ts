export const Sync = () => {
  console.log(`this is the export from sync-utils`);
}


export const SyncClient = async (host: string) => {
  const res = await fetch(host);
  console.log(await res.json());
}