Voici un script en Python pour un bot Telegram qui réagit spécifiquement aux messages contenant le nom "Dan Jersey". Lorsque quelqu'un envoie un message avec "Dan Jersey", le bot répondra avec un message personnalisé.

Script Python

from telegram.ext import Updater, CommandHandler, MessageHandler, Filters

# Commande /start
def start(update, context):
    update.message.reply_text("Bonjour ! Je suis un bot qui réagit au nom Dan Jersey.")

# Commande /help
def help_command(update, context):
    update.message.reply_text("Envoyez un message contenant 'Dan Jersey' pour voir ma réaction !")

# Réponse aux messages contenant "Dan Jersey"
def handle_message(update, context):
    text = update.message.text
    if "Dan Jersey" in text:
        update.message.reply_text("Ah, Dan Jersey ! Toujours une légende ! un gars extraordinaire !")
    else:
        update.message.reply_text("Je ne vois pas Dan Jersey dans ce message.")

# Fonction principale
def main():
    # Remplacez par votre token
    TOKEN = "7390422684:AAFQdDt9SFyLRlM6rexQAAA28U1Ra0DdDCY"
    
    # Initialisation du bot
    updater = Updater(TOKEN, use_context=True)
    dispatcher = updater.dispatcher

    # Gestion des commandes
    dispatcher.add_handler(CommandHandler("start", start))
    dispatcher.add_handler(CommandHandler("help", help_command))

    # Gestion des messages
    dispatcher.add_handler(MessageHandler(Filters.text & ~Filters.command, handle_message))

    # Démarrer le bot
    updater.start_polling()
    updater.idle()

if __name__ == "__main__":
    main()
 
