const Pessoas = require('../models/pessoas');

class PessoasController {
    static async create(req, res) {
        try {
            const { name, idadePessoa } = req.body;
            if (!name || !idadePessoa) {
                return res.status(400).json({ message: "Dados inválidos." });
            }
            
            const pessoasData = {
            name,
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
           const people = await Pessoas.find();
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
            const { name, idadePessoa } = req.body;
            const updatedData = {
                name,
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
    const pessoas = await Pessoas.findById(req.params.id);

    if (!pessoas) {
      return res.status(404).json({ error: "Item não encontrado" });
    }

    pessoas.isActive = false;
    await pessoas.save();

    return res.status(200).json({ message: "Item desativado" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar pessoas" });
  }
}
}	


module.exports = PessoasController;
