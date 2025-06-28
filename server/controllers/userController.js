const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const User = "";

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) return next(new AppError("User not found!", 404));

  res.status(200).json({ status: "success", data: user });
});
