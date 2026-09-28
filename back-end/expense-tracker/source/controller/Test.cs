using Microsoft.AspNetCore.Http.HttpResults;

public class TestController()
{
    
    public IResult Test()
    {
        return Results.Json("Success");
    }

}