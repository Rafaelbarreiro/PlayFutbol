const {Router} = require ("express");
const { getGroups, postGroup } = require("../controllers/group");

const router = Router();

router.get("/", getGroups);
router.post("/", postGroup)

module.exports = router