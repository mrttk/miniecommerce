using EcommerceAPI.Domain.Entities.Common;
using ECommerceAPI.Application.Repositories;
using ECommerceAPI.Persistance.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Persistance.Repositories
{
    public class ReadRepository<TEntity> : IReadRepository<TEntity> where TEntity : BaseEntity
    {
        private readonly ECommerceAPIContext _context;

        public ReadRepository(ECommerceAPIContext context)
        {
            _context = context;
        }

        public DbSet<TEntity> Table => _context.Set<TEntity>();

        public IQueryable<TEntity> GetAll() => Table;

        public IQueryable<TEntity> GetWhere(Expression<Func<TEntity, bool>> method) => Table.Where(method);

        public async Task<TEntity> GetSingleAsync(Expression<Func<TEntity, bool>> method) => await Table.FirstOrDefaultAsync(method);
        public async Task<TEntity> GetByIdAsync(string id) => await Table.FindAsync(Guid.Parse(id));

    }
}
