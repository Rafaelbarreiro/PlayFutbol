const { Group } = require("../db");
const jsonProducts = require ("../json/group.json")
const { sortArrayOfObjets, sortArray } = require("../utils/index")


const populateGroup = async () => {
    for (c of jsonProducts) {
      await Group.create(
       c
    );
    }
  }

const getGroups = async (req, res) => {
    try {
      const groups = await Group.findAll({ raw: true });
      res.status(200).send(sortArrayOfObjets(groups, 'name'));
    } catch (error) {
      res.status(400).send(error);
    }
  };
const postGroup = async (req, res) => {
  const {name, userId} = req.body;
  try {
    const group = await Group.create({
      name,
      userId
    })
    res.send(group)
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

}
  
module.exports = {getGroups, populateGroup, postGroup}