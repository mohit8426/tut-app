import React from 'react';

import './Blog.css';

function Blog() {
  return (
    <div>
      <h1>AWS Pipeline Architecture</h1>

      <h2>1. Export Data from Firebase:</h2>
      <ul>
        <li><strong>Using Firebase Console or Admin SDK:</strong>
          <ul>
            <li>Export data as JSON or CSV format.</li>
            <li>Utilize Firebase’s built-in export tools or script exports with the Admin SDK.</li>
          </ul>
        </li>
      </ul>

      <h2>2. Store Data in an Intermediate Storage:</h2>
      <ul>
        <li><strong>Amazon S3:</strong>
          <ul>
            <li>Upload the exported data to an S3 bucket.</li>
            <li>Ensure S3 bucket policies are configured for access control.</li>
          </ul>
        </li>
      </ul>

      <h2>3. Transform Data if Necessary:</h2>
      <ul>
        <li><strong>Data Preparation:</strong>
          <ul>
            <li>Use AWS Glue or AWS Lambda for data cleaning and restructuring.</li>
            <li>Prepare the data to match the schema requirements of Redshift tables.</li>
          </ul>
        </li>
      </ul>

      <h2>4. Load Data into Redshift:</h2>
      <ul>
        <li><strong>COPY Command:</strong>
          <ul>
            <li>Use Redshift’s <code>COPY</code> command to load data from S3.</li>
            <li>Ensure appropriate permissions and network settings for Redshift to access S3.</li>
          </ul>
        </li>
      </ul>

      <h2>5. Automate the Process (Optional):</h2>
      <ul>
        <li><strong>Automation Tools:</strong>
          <ul>
            <li><strong>AWS Data Pipeline:</strong> Schedule and automate data transfer processes.</li>
            <li><strong>AWS Glue:</strong> Perform ETL tasks, triggered by AWS Lambda for scheduled jobs.</li>
            <li><strong>AWS CloudWatch:</strong> Monitor Glue jobs and set up notifications for success/failure alerts.</li>
          </ul>
        </li>
      </ul>

      <h1>Azure Pipeline Architecture</h1>

      <h2>1. Uploading the File in SQL Server:</h2>
      <ul>
        <li><strong>SQL Server Management Studio (SSMS):</strong>
          <ul>
            <li>Create a database and import CSV files into SQL Server.</li>
            <li>Handle any data type modifications and errors during import.</li>
          </ul>
        </li>
      </ul>

      <h2>2. Azure – Create Storage Account:</h2>
      <ul>
        <li><strong>Azure Portal:</strong>
          <ul>
            <li>Create a new storage account.</li>
            <li>Set up a container within the storage account for data storage.</li>
          </ul>
        </li>
      </ul>

      <h2>3. Azure – Create Data Factory:</h2>
      <ul>
        <li><strong>Azure Data Factory (ADF):</strong>
          <ul>
            <li>Create a new Data Factory instance.</li>
            <li>Set up integration runtime for data movement.</li>
          </ul>
        </li>
      </ul>

      <h2>4. Azure – Setup Integration Runtime:</h2>
      <ul>
        <li><strong>Self-Hosted Integration Runtime:</strong>
          <ul>
            <li>Install and configure integration runtime on an on-premise server for SQL Server access.</li>
          </ul>
        </li>
      </ul>

      <h2>5. Load Data from SQL to Storage – Pipeline:</h2>
      <ul>
        <li><strong>ADF Pipeline:</strong>
          <ul>
            <li>Define the source (SQL Server) and sink (Azure Blob Storage).</li>
            <li>Publish and trigger the pipeline to move data.</li>
          </ul>
        </li>
      </ul>

      <h2>6. Databricks – Connect to Storage – PySpark:</h2>
      <ul>
        <li><strong>Azure Databricks:</strong>
          <ul>
            <li>Mount the Azure Blob Storage to Databricks.</li>
            <li>Use PySpark to read and process data from storage.</li>
          </ul>
        </li>
      </ul>

      <h2>7. Databricks – Aggregates Table Building – Spark SQL:</h2>
      <ul>
        <li><strong>Data Aggregation:</strong>
          <ul>
            <li>Write Spark SQL scripts to aggregate and transform data within Databricks.</li>
            <li>Save processed data back to Azure Blob Storage or another intermediate storage.</li>
          </ul>
        </li>
      </ul>

      <h2>8. Power BI:</h2>
      <ul>
        <li><strong>Data Visualization:</strong>
          <ul>
            <li>Connect Power BI to Azure Synapse Analytics or directly to Azure Blob Storage.</li>
            <li>Build interactive dashboards and reports based on processed data.</li>
          </ul>
        </li>
      </ul>

      <h2>Step-by-Step Execution for Azure:</h2>
      <ol>
        <li><strong>Data Extraction:</strong>
          <ul>
            <li><strong>Azure Data Factory (ADF):</strong>
              <ul>
                <li>Create a pipeline to extract data from SQL Server.</li>
                <li>Store extracted data in Azure Data Lake Storage Gen2.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Data Transformation:</strong>
          <ul>
            <li><strong>Azure Databricks:</strong>
              <ul>
                <li>Process raw data using notebooks.</li>
                <li>Perform data cleansing and transformation with Spark.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Data Loading:</strong>
          <ul>
            <li><strong>Azure Synapse Analytics:</strong>
              <ul>
                <li>Load transformed data from Data Lake to Synapse.</li>
                <li>Define tables for storing the processed data.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Data Security:</strong>
          <ul>
            <li><strong>Azure Key Vault:</strong>
              <ul>
                <li>Store and manage credentials and secrets.</li>
              </ul>
            </li>
            <li><strong>Azure Active Directory (AAD):</strong>
              <ul>
                <li>Manage user authentication and access control.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Data Visualization:</strong>
          <ul>
            <li><strong>Microsoft Power BI:</strong>
              <ul>
                <li>Connect to Synapse Analytics for creating dashboards.</li>
                <li>Visualize key metrics and insights.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>

      <h2>Benefits:</h2>
      <ul>
        <li><strong>Scalable and Flexible Architecture:</strong> Leveraging cloud services for scalable data processing.</li>
        <li><strong>Secure Data Handling:</strong> Using Key Vault and AAD for secure access.</li>
        <li><strong>Comprehensive Analytics:</strong> Combining data transformation and visualization for actionable insights.</li>
      </ul>

      <p>This architecture ensures efficient data processing and analysis from on-premises SQL Server to Azure cloud services, providing a complete solution from data extraction to visualization.</p>
    </div>
  );
}

export default Blog;
