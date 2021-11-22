import {Request, Response} from 'express';
import User from '../models/userSchema';

export default class UserController {
    createUser = async (req: Request, res: Response) => {
        try {
            await User.create(req.body);
            res.status(200).json({ message: "Usuario criado com sucesso!"});
        } catch (error) {
            console.log(error);
            res.status(400).json({message: "Erro ao criar usuario!"})
        }
    }

    getAllUsers = async (req: Request, res: Response) => {
        try {
            const response = await User.find();
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
            res.status(400).json({message: "Erro ao pegar todos os usuarios!"})
        }
    }

    getOneUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
          const response = await User.findById(id);
          res.status(200).json(response);
        } catch (error) {
            console.log(error);
            res.status(400).json({message: "Erro ao pegar o usuario!"})
        }
    }

    updateOneUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const user = await User.findById(id);
            if(!user) {
                res.status(400).json({message: "Usuário não existe!"});
            }
            await user.updateOne(req.body);
            res.status(200).json({message: "Usuário atualizado com sucesso!"});
        } catch (error) {
            console.log(error);
            res.status(400).json({message: "Falha ao atualizar o usuário!"});
        }
    }

    deleteOneUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            await User.findByIdAndDelete(id);
            res.status(200).json({message: "Usuário deletado com sucesso!"});
        } catch (error) {
            console.log(error);
            res.status(400).json({message: "Falha ao deletar o usuário!"});
        }
    }
}

