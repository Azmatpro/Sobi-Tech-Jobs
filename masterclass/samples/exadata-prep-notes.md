# Oracle Exadata admin: prep notes

Copied and lightly expanded from the Oracle Exadata sheet in this repo (`src/pages/OracleSheet/TopicSheet.jsx`), for use as a sample knowledge file in the Day 6 lab. **Check every point against Oracle's own documentation before relying on it in an interview.**

## Exadata architecture
- Database Machine overview: Quarter, Half and Full Rack.
- Storage servers (cells): High Performance versus Extreme Flash.
- Network interconnect: InfiniBand or RoCE.
- Compute nodes (database servers).

## Key features
- **Smart Scan:** offloads SQL processing to the storage cells.
- **Storage Indexes:** avoid unnecessary I/O.
- **Hybrid Columnar Compression (HCC):** saves space.
- **I/O Resource Management (IORM):** prioritises workloads.

## Maintenance and patching
- Patching with `patchmgr`: rolling versus non-rolling.
- Replacing failed disks with `CellCLI`.
- Upgrading image versions.
- Health checks with `exachk`. Run it before and after maintenance.

## Essential commands (CellCLI and dcli)
- `LIST CELL DETAIL`
- `LIST PHYSICALDISK`
- `LIST LUN`
- `CREATE CELLDISK` and `CREATE GRIDDISK`
- `dcli -g cell_group -l root "command"`

Note: the app's sheet spells the second command `LIST PHYSICALDIKS`. The corrected spelling is used here.

## Questions to practise
1. What does Smart Scan offload, and why does that help?
2. Rolling versus non-rolling patching: when would you choose each?
3. What do you check before and after maintenance?
4. A disk fails in a storage cell. What are your first three steps?
