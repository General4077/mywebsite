import getConfig from 'next/config';

export default async function getPosts(req, res) {
    const { serverRuntimeConfig } = getConfig();
    let data = [];
        try {
            const res = await fetch(`${serverRuntimeConfig.apiUrl}/blog/`);
            data = await res.json();

        } catch (err) {
            console.log(err);
            data = {};
    }
  res.status(200).json(data);
}