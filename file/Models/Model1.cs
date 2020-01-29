namespace file.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.Data.Entity;
    using System.Linq;

    public class MVCEntities : DbContext
    {
        // Votre contexte a été configuré pour utiliser une chaîne de connexion « Model1 » du fichier 
        // de configuration de votre application (App.config ou Web.config). Par défaut, cette chaîne de connexion cible 
        // la base de données « file.Models.Model1 » sur votre instance LocalDb. 
        // 
        // Pour cibler une autre base de données et/ou un autre fournisseur de base de données, modifiez 
        // la chaîne de connexion « Model1 » dans le fichier de configuration de l'application.
        public MVCEntities()
            : base("name=Model1")
        {
        }

        // Ajoutez un DbSet pour chaque type d'entité à inclure dans votre modèle. Pour plus d'informations 
        // sur la configuration et l'utilisation du modèle Code First, consultez http://go.microsoft.com/fwlink/?LinkId=390109.

        public virtual DbSet<tbl_details> tbl_details { get; set; }
    }

       public class tbl_details
    {
        [Key]
        public int Id { get; set; }
        public string Image_url { get; set; }
    }
}