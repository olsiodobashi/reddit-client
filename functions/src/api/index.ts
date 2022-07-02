import * as express from 'express';
import { r } from '../admin';
import * as cors from 'cors';

const app = express();
app.use(cors());

app.get('/r/:subredditId', async (req, res) => {

    const { after, before } = req.query;

    if (req.params.subredditId === 'all') {
        try {
            // @ts-ignore
            const posts = await r.getHot('all', { after, before });
            return res.json(posts);
        } catch (error) {
            console.log(error);
        }
    }

    // @ts-ignore
    const posts = await r.getSubreddit(req.params.subredditId);
    return res.json(posts);
});

app.get('/submission/:id', async (req, res) => {
    res.json({
        done: req.params.id
    });
});

export default app;
