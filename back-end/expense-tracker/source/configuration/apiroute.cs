
namespace expense_tracker.source.configuration;

public static class ApiRoutes
{
    public static void ConfigureApiRoutes(this WebApplication app)
    {
       app.MapGet("/test", (TestController tc) => tc.Test()); 
    }
}