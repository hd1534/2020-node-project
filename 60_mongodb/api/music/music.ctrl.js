const musicModel = require("../../models/music");
const mongoose = require("mongoose");

// id 유효성 체크
const checkId = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).end();

    next();
}


// 목록조회
const list = (req, res, next) => {
    const limit = parseInt(req.query.limit || 10, 10); 
    
    if (Number.isNaN(limit))
        return res.status(400).end();  // 에러는 마음대로 (400 = bad request)

    musicModel.find((err, result) => {
        if (err)
            next(err); // 직접 처리해도 됨
            
        // res.json(result);
        res.render("music/list", {result});
    }).limit(limit).sort({_id: -1});  // id를 기준으로 내림차순 (-1)
    
}
// 상세조회   api/music/:id
const detail = (req, res, next) => {
    const id = req.params.id;

    result = musicModel.findById(id, (err, result) => {
        if(err)
            next(err);

        if(!result)
            return res.status(404).end();

        res.render("music/detail", {result});
    });
    
}
// 등록
const create = (req, res, next) => {
    const {singer, title} = req.body;
    console.log(title);
    if (!singer || !title)
        return res.status(400).end("모든값이 입력되어야 합니다.");

    // Document.save()
    // const music = new musicModel({singer, title});
    // music.save((err, result) => {
    //     if (err)
    //         next(err);
    //     res.status(201).json(result);
    // })

    // MusicModel.create()
    musicModel.create({singer, title}, (err, result) => {
        if (err)
            next(err);
        res.status(201).json(result);
    })
}


// 수정  api/music/:id
const update = (req, res, next) => {
    const id = req.params.id;

    const {singer, title} = req.body;
    
    //                           id, data           , option     , callback function
    musicModel.findByIdAndUpdate(id, {singer, title}, {new: true}, (err, result) => {
        if (err)
            next(err);
        if (!result)
            return res.status(404).end();

        res.json(result);
    })
}
// 삭제  api/music/:id
const remove = (req, res, next) => {
    const id = req.params.id;
        
    musicModel.findByIdAndDelete(id, (err, result) => {
        if(err)
            next(err);
        if(!result)
            return res.status(404).end();
        
        res.send(result);
    })
}

const showCreatePage = (req, res) => {
    res.render("music/create");
}

const showUpdatePage = (req, res) => {
    musicModel.findById(req.params.id, (err, result) => {
        if(err)
            return res.status(500).send("조회 시 오류가 발생했습니다");
        if(!result)
            return res.status(404).send("해당하는 데이터가 없습니다.");
        res.render("music/update", {result});
    })
}

module.exports = {checkId, list, detail, create, update, remove, showCreatePage, showUpdatePage};