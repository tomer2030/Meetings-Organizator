import express, { Request, Response, NextFunction } from "express";
import MeetingModel from "../4-models/meetings-model";
import logic from "../5-logic/logic";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/meetings/dev-groups
// route for all the dev groups
router.get("/meetings/dev-groups", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const groups = await logic.getAllDevGroups();
        response.json(groups);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/meetings/:groupId
// route for all the meetings for one group
router.get("/meetings/:groupId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const groupId = +request.params.groupId;
        const meetings = await logic.getMeetingsForOneGroup(groupId);
        response.json(meetings);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:3001/api/meetings
// route for post a new meeting
router.post("/meetings", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meeting = new MeetingModel(request.body);
        const addedMeeting = await logic.addNewMeeting(meeting);
        response.json(addedMeeting).status(204);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;