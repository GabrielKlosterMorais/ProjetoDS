const Gatitos = require('../models/gatitos');

class GatitosController {
    static async create(req, res) {
        try {
            const { name, idPessoa, pessoaTemGato } = req.body;
            if (!name || !idPessoa || !pessoaTemGato) {
                return res.status(400).json({ message: "Dados inválidos." });
            }
            
            const gatitosData = {
                name,
                idPessoa,
                pessoaTemGato
            };

            const newGatitos = await Gatitos.create(gatitosData);

            return res.status(201).json({ 
                message: 'Gatito criado com sucesso', 
                data: newGatitos 
            });

        } catch (error) {
            return res.status(500).json({ 
                message: 'Erro ao criar gatito', 
                error: error.message 
            });
        }
    }

    static async getAll(req, res) {
        try {
            const gatitos = await Gatitos.find();
            return res.status(200).json({ data: gatitos });
        } catch (error) {
            return res.status(500).json({ 
                message: 'Erro ao encontrar gatitos', 
                error: error.message 
            });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const gatitos = await Gatitos.findById(id);

            if (!gatitos) {
                return res.status(404).json({ message: 'Gatito não encontrado' });
            }

            return res.status(200).json({ data: gatitos });

        } catch (error) {
            return res.status(500).json({ 
                message: 'Erro ao encontrar gatito', 
                error: error.message 
            });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name, idPessoa, pessoaTemGato } = req.body;

            const updatedData = {
                name,
                idPessoa,
                pessoaTemGato
            };

            const updatedGatitos = await Gatitos.findByIdAndUpdate(id, updatedData, { new: true });

            if (!updatedGatitos) {
                return res.status(404).json({ message: 'Gatito não encontrado' });
            }

            return res.status(200).json({ 
                message: 'Gatito atualizado com sucesso', 
                data: updatedGatitos 
            });

        } catch (error) {
            return res.status(500).json({ 
                message: 'Erro ao atualizar gatito', 
                error: error.message 
            });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;

            const deletedGatitos = await Gatitos.findByIdAndDelete(id);

            if (!deletedGatitos) {
                return res.status(404).json({ message: 'Gatito não encontrado' });
            }

            return res.status(200).json({ message: 'Gatito deletado com sucesso' });

        } catch (error) {
            return res.status(500).json({ 
                message: 'Erro ao deletar gatito', 
                error: error.message 
            });
        }
    }
}

module.exports = GatitosController;