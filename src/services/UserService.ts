import AppDataSource from "../data-source";
import { Utilisateur } from "../entities/Utilisateur.entity"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserService {
  private userRepository = AppDataSource.getRepository(Utilisateur);
  
  // inscription
  async signup(email: string, password: string){
    console.log(`email: ${email} password: ${password}`);
    const rounds = 10; // nb de tours de hashage
    
    try {
      const hash = await bcrypt.hash(password, rounds);
      const newUser = this.userRepository.create({email:email,password:hash});
      const createdUser = await this.userRepository.save(newUser);
      return createdUser;
    } catch (error) {
      console.error('Mon erreur : ',error);
      return null;
    }
  }

  async login(email:string,password:string){
    const found = await this.userRepository.findOneBy({email:email});
    if(!found){
      return null;
    }
    const passwordMatched = await bcrypt.compare(password, found.password);
    if(!passwordMatched){
      return null;
    }
    const expiresIn = '1h'; // Période de validité d'une heure
    const token = jwt.sign({sub: found.id,email: found.email},process.env.SECRET_KEY,{ expiresIn });

    console.log('JWT créé avec expiration :', token);

    return token;
  }

}
