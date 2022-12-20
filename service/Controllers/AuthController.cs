namespace flirtify.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _service;

        public AuthController(IAuthService service)
        {
            _service = service;
        }

        [HttpPost("register")]
        public async Task<ActionResult<ServiceResponse<User>>> Register(RegisterUserDto user)
        {
            var response = await _service.Register(user);

            if(!response.Success) 
                return BadRequest(response);

            return Ok(response);
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(LoginUserDto user)
        {
            var response = await _service.Login(user);
            if(!response.Success) 
                return BadRequest(response);

            return Ok(response);
        }
    }
}
