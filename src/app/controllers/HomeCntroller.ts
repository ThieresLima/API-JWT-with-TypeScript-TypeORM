import { Request, Response } from 'express';

class HomeController {
    index(req: Request, res: Response) {
        return res.send({ userID: req.userId });
    }
}

export default new HomeController;