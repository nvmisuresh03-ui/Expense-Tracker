
namespace expense_tracker.source.configuration;

public static class Dependencies
{

    public static void AddDependencies(this IServiceCollection services)
    {
        services.AddScoped<TestController>();
    }

}