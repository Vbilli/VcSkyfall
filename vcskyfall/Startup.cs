using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(vcskyfall.Startup))]
namespace vcskyfall
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
