import Discord from "discord.js"
import { token } from "./token.js";

const client = new  Discord.Client({intents:[
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    
  ]});
  
  
  
  client.on('ready', () => {
      console.log(`ta indo ${client.user.tag}` )
      
  })
  
    let pessoas =[]
    const PersonName= (pessoa)=>{
      let verificandoArray = false; 
      pessoas.filter(people => {
        if(people === pessoa){
          verificandoArray  = true
           
        }else{
          verificandoArray  = false
         
        }
      });
      
      if(!verificandoArray){
      pessoas.push(pessoa)
      }else{
        
        return;
      }
      
    }
    const VerifyPerson = (msg)=>{
      let verificandoArray = false; 
      pessoas.filter(people => {
        if(people === msg){
         verificandoArray  = true;
           
        }else{
         verificandoArray  = false;
         
        }
      
      });
      return verificandoArray;
    }
   
    client.on("message", (msg) => {
     
    
      let Mensagens = {
        'oi': 'salve felas',
        'bot de corno': 'tua mae vagabunda',
        'quem fez o bot': `O Rei né @valdim`,
        'osvaldo da a bunda': 'teu cu',
        'bot viado': 'me mama',
        'bot corno': 'te fuder'
    
      }
        if(Mensagens[msg.content]){
          msg.reply(Mensagens[msg.content]);
        }
  
       
  
        if(!VerifyPerson(msg.author.username)){
        
        if (msg.author.username === "Nicole Laysa") {
          PersonName(msg.author.username)
          msg.reply(`ola Nicole amor da vida do Rei Osvaldo`);
         
        }else if(msg.author.username === 'Valdim'){
          PersonName(msg.author.username)
          msg.reply(`ola meu Rei`);
          
        }else if(msg.author.bot){
    
          return;
        }else{
          PersonName(msg.author.username)
          msg.reply(`ola random`);
          
        }
      }else{
        return;
      }
      
       console.log(pessoas)
      
      })

      const Jogar = ()=>{
        console.log('dale')
      }
      client.on("message", msg =>{
        if(msg.content === 'jogar'){
          Jogar()
        }
      })
  
  client.login(token)