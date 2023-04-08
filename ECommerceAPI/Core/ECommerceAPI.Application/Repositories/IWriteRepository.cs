using EcommerceAPI.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Application.Repositories
{
    public interface IWriteRepository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
    {
        Task<bool> AddAsync(TEntity model);
        Task<bool> AddRangeAsync(List<TEntity> datas);
        bool Remove(TEntity model);
        bool RemoveRange(List<TEntity> datas);
        Task<bool> RemoveAsync(string id);
        bool Update(TEntity model);
        Task<int> SaveAsync();
        int Save();
    }
}
