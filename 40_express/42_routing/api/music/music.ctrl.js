// 더미 데이터
let music = [
    {id: 1, singer: "lois", title: "shaved ice"},
    {id: 2, singer: "omfg", title: "hello"}
]

// 목록조회
const list = (req, res) => {
    const limit = parseInt(req.query.limit || 10, 10); 
    
    if (Number.isNaN(limit))
        return res.status(400).end();  // 에러는 마음대로 (400 = bad request)
    
    res.json(music.slice(0, limit));
    
}
// 상세조회   api/music/:id
const detail = (req, res) => {
    const id = parseInt(req.params.id);

    if (Number.isNaN(id))
        return res.status(400).end();
    
    const result = music.find(m => m.id === id)
    
    if(!result)
        return res.status(404).end();

    res.json(result);
    
}
// 등록
const create = (req, res) => {
    const {singer, title} = req.body;
    console.log(title);
    if (!singer || !title)
        return res.status(400).end();

    data = {id: music.length + 1, singer, title};
    music.push(data);
    res.status(201).json(data);
}


// 수정  api/music/:id
const update = (req, res) => {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id))
        return res.status(400).end();
        
    const result = music.find(m => m.id === id)
    if(!result) 
        return res.status(404).end();

    const {singer, title} = req.body;
    if(singer)
        result.singer = singer;
    if(title)
        result.title = title;
    res.status(201).json(result);
}
// 삭제  api/music/:id
const remove = (req, res) => {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id))
        return res.status(400).end();
        
    const result = music.find(m => m.id === id);
    if(!result) 
        return res.status(404).end();

    moive = music.filter(m => m.id !== id);
    res.send(`id : ${req.params.id} is deleted`);
}

module.exports = {list, detail, create, update, remove};