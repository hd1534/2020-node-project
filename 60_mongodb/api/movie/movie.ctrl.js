const movieModel = require("../../models/movie");
const mongoose = require("mongoose");

// id 유효성 체크
const checkId = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).end();

  next();
};

// 목록조회
const list = (req, res) => {
  const limit = parseInt(req.query.limit || 10, 10);

  if (Number.isNaN(limit)) return res.status(400).end(); // 에러는 마음대로 (400 = bad request)

  movieModel
    .find((err, result) => {
      if (err) next(err); // 직접 처리해도 됨

      // res.json(result);
      res.render("movie/list", { result });
    })
    .limit(limit)
    .sort({ _id: -1 }); // id를 기준으로 내림차순 (-1)
};
// 상세조회   api/movie/:id
const detail = (req, res) => {
  const id = req.params.id;

  result = movieModel.findById(id, (err, result) => {
    if (err) next(err);

    if (!result) return res.status(404).end();

    res.render("movie/detail", { result });
  });
};
// 등록
const create = (req, res) => {
  const { title, director, year } = req.body;

  if (!title || !director || !year) return res.status(400).end();

  // Document.save()
  // const movie = new movieModel({title, director, year});
  // movie.save((err, result) => {
  //     if (err)
  //         next(err);
  //     res.status(201).json(result);
  // })

  // movieModel.create()
  movieModel.create({ title, director, year }, (err, result) => {
    if (err) next(err);
    res.status(201).json(result);
  });
};

// 수정  api/movie/:id
const update = (req, res) => {
  const id = req.params.id;

  const { title, director, year } = req.body;

  //                           id, data           , option     , callback function
  movieModel.findByIdAndUpdate(
    id,
    { title, director, year },
    { new: true },
    (err, result) => {
      if (err) next(err);
      if (!result) return res.status(404).end();

      res.json(result);
    }
  );
};
// 삭제  api/movie/:id
const remove = (req, res) => {
  const id = req.params.id;

  movieModel.findByIdAndDelete(id, (err, result) => {
    if (err) next(err);
    if (!result) return res.status(404).end();

    res.send(result);
  });
};

const showCreatePage = (req, res) => {
  res.render("movie/create");
};

const showUpdatePage = (req, res) => {
  movieModel.findById(req.params.id, (err, result) => {
    if (err) return res.status(500).send("조회 시 오류가 발생했습니다");
    if (!result) return res.status(404).send("해당하는 데이터가 없습니다.");
    res.render("movie/update", { result });
  });
};

module.exports = {
  checkId,
  list,
  detail,
  create,
  update,
  remove,
  showCreatePage,
  showUpdatePage,
};
