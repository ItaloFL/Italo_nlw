import { getCustomRepository, Repository } from "typeorm"
import { SettingsRepository } from "../repositories/SettingsRepository"
import { Setting } from "../entities/Setting"

interface IsettingsCreate{
    chat: boolean;
    username: string;
}
class SettingsService{
    private settingsRepository: Repository<Setting>;

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }


    async create({chat, username} : IsettingsCreate){

        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        });

        if (userAlreadyExists){
            throw new Error("User already exist!");
        }
        const settings =  this.settingsRepository.create({
            chat,
            username
        });

        await this.settingsRepository.save(settings);

        return settings;
    }

}


export { SettingsService }