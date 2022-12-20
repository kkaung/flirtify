namespace flirtify.Controllers
{
    [ApiController]
    [Route("/api/users")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<ServiceResponse<List<User>>>> GetUsers()
        {
            var response = await _service.GetUsers();

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<User>>> GetUser(int id)
        {
            var response = await _service.GetUser(id);

            if (!response.Success)
                return BadRequest(response);

            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ServiceResponse<User>>> DeleteUser(int id)
        {
            var response = await _service.DeleteUser(id);
            if (!response.Success)
                return BadRequest(response);

            return Ok(response);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ServiceResponse<User>>> UpdateUser(int id)
        {
            var response = await _service.UpdateUser(id);
            if (!response.Success)
                return BadRequest(response);

            return Ok(response);
        }
    }
}
