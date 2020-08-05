// 더미 데이터
var movie = [
    {id: 1, director: "몰라요", title: "아이언맨 1", year: "몰라요!"},
    {id: 2, director: "몰라요", title: "아이언맨 2", year: "몰라요!"},
    {id: 3, director: "몰라요", title: "아이언맨 3", year: "몰라요!"},
]

// 목록조회
const list = (req, res) => {
    const limit = parseInt(req.query.limit || 10, 10); 
    
    if (Number.isNaN(limit))
        return res.status(400).end();  // 에러는 마음대로 (400 = bad request)
    
    res.json(movie.slice(0, limit));
    
}
// 상세조회   api/movie/:id
const detail = (req, res) => {
    const id = parseInt(req.params.id);

    if (Number.isNaN(id))
        return res.status(400).end();
    
    const result = movie.find(m => m.id === id)
    
    if(!result)
        return res.status(404).end();

    res.json(result);
    
}
// 등록
const create = (req, res) => {
    const {director, title, year} = req.body;
    console.log(title);
    if (!director || !title || !year)
        return res.status(400).end();

    data = {id: movie.length + 1, director, title, year};
    movie.push(data);
    res.status(201).json(data);
}


// 수정  api/movie/:id
const update = (req, res) => {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id))
        return res.status(400).end();
        
    const result = movie.find(m => m.id === id)
    if(!result) 
        return res.status(404).end();

    const {director, title, year} = req.body;
    if(director)
        result.director = director;
    if(title)
        result.title = title;
    if(year)
        result.year = year;
    res.status(201).json(result);
}
// 삭제  api/movie/:id
const remove = (req, res) => {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id))
        return res.status(400).end();
        
    const result = movie.find(m => m.id === id);
    if(!result) 
        return res.status(404).end();

    movie = movie.filter(m => m.id != id);
    res.status(200).json(result);
}

module.exports = {list, detail, create, update, remove};