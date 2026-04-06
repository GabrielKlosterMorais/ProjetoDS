const Pessoas = require('../models/pessoas');

class PessoasController {
    static async create(req, res) {
        try {
            const { name, idPessoa, idadePessoa } = req.body;
            if (!name || !idPessoa || !idadePessoa) {
                return res.status(400).json({ message: "Dados inválidos." });
            }
            
            const pessoasData = {
                name,
                idPessoa,
                idadePessoa
            };
            const newPessoas = await Pessoas.create(pessoasData);
            return res.status(201).json({ message: 'Pessoa criada com sucesso', data: newPessoas });

        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar pessoa', error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const people = await pessoas.find();
            return res.status(200).json({ data: people });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar pessoas', error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const pessoas = await Pessoas.findById(id);
            if (!pessoas) {
                return res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            return res.status(200).json({ data: pessoas });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar pessoa', error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name, lastName, salary } = req.body;
            const updatedData = {
                name,
                idPessoa,
                idadePessoa
            };
            const updatedPessoas = await Pessoas.findByIdAndUpdate(id, updatedData, { new: true });
            if (!updatedPessoas) {
                return res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            return res.status(200).json({ message: 'Pessoa atualizada com sucesso', data: updatedPessoas });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar pessoa', error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedPessoas = await Pessoas.findByIdAndDelete(id);
            if (!deletedPessoas) {
                return res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            return res.status(200).json({ message: 'Pessoa deletada com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar pessoa', error: error.message });
        }
    }
}

module.exports = PessoasController;
