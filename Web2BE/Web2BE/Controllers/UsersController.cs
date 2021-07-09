using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Web2BE.Data;
using Web2BE.Models;

namespace Web2BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IOptions<JWTSettings> config;
        public UsersController(DataContext context, IOptions<JWTSettings> config)
        {
            this.config = config;
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }
        
        // PUT: api/Users/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.UserId)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Route ("Register")]
        public async Task<ActionResult> PostUser([FromBody]User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.UserId }, user);
        }

        [HttpPost]
        [Route ("Login")]
        public async Task<IActionResult> Login([FromBody]UserLoginInfo loginInfo)
        {   
            if(loginInfo == null)
            {
                return BadRequest("Invalid client request");
            }
            var userList = await _context.Users.ToListAsync();
            foreach(var user in userList)
            {
                if (user.Email == loginInfo.Email && user.Password == loginInfo.Password)
                {
                    //var tokenDescriptor = new SecurityTokenDescriptor
                    //{
                    //    Subject = new System.Security.Claims.ClaimsIdentity(new Claim[] {
                    //        new Claim("UserId", user.UserId.ToString())
                    //    }),
                    //    Expires = DateTime.UtcNow.AddMinutes(5),
                    //    SigningCredentials = new SigningCredentials(new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config.Value.SecretKey))), SecurityAlgorithms.HmacSha256Signature)
                    //};
                    //var tokenHandler = new JwtSecurityTokenHandler();
                    //var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                    //var token = tokenHandler.WriteToken(securityToken);
                    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config.Value.SecretKey));
                    var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                    var tokenOptions = new JwtSecurityToken(
                        issuer: config.Value.Issuer,
                        audience: config.Value.Audience,
                        claims: new List<Claim>(),
                        expires: DateTime.UtcNow.AddMinutes(5),
                        signingCredentials: signinCredentials
                        );
                    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                    return Ok(new { token = tokenString });
                }
            }
            return BadRequest(new { message = "An error occured." });
        }
        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.UserId == id);
        }
    }
}
