const db = require('../db/db');

const getAllCatalog = async (req, res) => {
    try {
        const getData = 'SELECT * FROM public."Catalog";';
        const result = await db.query(getData);
        res.json(result.rows);
    } catch (error) {
        res.status(500).send({ message: "ERROR In Get" });
    }
}

const addCatalog = async (req, res) => {
    const { catalog_name } = req.body;
    try {
        const insertData = 'INSERT INTO public."Catalog"(catalog_name) VALUES ($1)';
        const result = await db.query(insertData, [catalog_name]);
        res.json(result.rows);
        console.log(result.rows);
    } catch (error) {
        res.status(500).send({ message: "ERROR In Insert" });
    }
}

const deleteCatalog = async (req, res) => {
    const catalog_id = req.query.id;
    try {
        await db.query('DELETE FROM public."Catalog" WHERE id = $1', [catalog_id]);
        res.json({ message: "The catalog Deleted !" });
    } catch (error) {
        res.status(500).send({ message: "ERROR In Delete" });
    }
}

const updateCatalog = async (req, res) => {
    const catalog_id = req.query.id;
    const { catalog_name } = req.body;
    try {
        await db.query('UPDATE public."Catalog" SET catalog_name = $1 WHERE id = $2', [catalog_name, catalog_id])
        res.json({ message: "The catalog Updated !" });
    } catch (error) {
        res.status(500).send({ message: "ERROR In Delete" });
    }
}


module.exports = {
    getAllCatalog,
    addCatalog,
    deleteCatalog,
    updateCatalog
}
