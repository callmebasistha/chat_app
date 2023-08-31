const workspaceService = require("../services/workspaceService");
const CreateWorkspace = (req, res) => {
  const body = req.body;
  workspaceService.insert(body, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: 0,
        message: err.body,
      });
    }
    return res.status(200).json({
      success: 1,
      data: result,
    });
  });
};
module.exports = { CreateWorkspace };
